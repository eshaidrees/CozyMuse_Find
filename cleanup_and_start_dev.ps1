# PowerShell Script to Clean and Restart Next.js Development Server
# This script addresses common Next.js development issues including:
# - Port conflicts
# - Lock file issues
# - Multiple package-lock.json files
# - Missing font file references
# - Ensures clean restart on port 3000 or alternative

# Define project directory
$projectDir = "C:\Users\PC\Desktop\Amazon landing page\cozymuse_finds"

# Change to project directory
Write-Host "Changing to project directory: $projectDir" -ForegroundColor Green
Set-Location -Path $projectDir

# Step 1: Stop any Node/Next.js processes that might be blocking the server
Write-Host "`nStep 1: Stopping Node/Next.js processes..." -ForegroundColor Yellow
$nodeProcesses = Get-Process node -ErrorAction SilentlyContinue
$nextProcesses = Get-Process next -ErrorAction SilentlyContinue

if ($nodeProcesses) {
    foreach ($proc in $nodeProcesses) {
        # Only kill processes that are related to Node.js in our project
        if ($proc.Path -like "*node*") {
            Write-Host "Stopping Node process PID $($proc.Id)" -ForegroundColor Red
            Stop-Process -Id $proc.Id -Force -ErrorAction SilentlyContinue
        }
    }
}

if ($nextProcesses) {
    foreach ($proc in $nextProcesses) {
        Write-Host "Stopping Next.js process PID $($proc.Id)" -ForegroundColor Red
        Stop-Process -Id $proc.Id -Force -ErrorAction SilentlyContinue
    }
}

# Also kill any process using port 3000 specifically
Write-Host "Checking for processes using port 3000..." -ForegroundColor Yellow
$port3000 = netstat -ano | findstr :3000
if ($port3000) {
    $port3000 | ForEach-Object {
        $pid = ($_ -split '\s+')[4]
        if ($pid -ne $null -and $pid -ne '') {
            Write-Host "Killing process using port 3000 (PID: $pid)" -ForegroundColor Red
            Stop-Process -Id $pid -Force -ErrorAction SilentlyContinue
        }
    }
} else {
    Write-Host "Port 3000 is not currently in use" -ForegroundColor Green
}

# Step 2: Delete the .next folder and lock files
Write-Host "`nStep 2: Removing .next folder and cache files..." -ForegroundColor Yellow
$nextFolder = Join-Path $projectDir ".next"
if (Test-Path $nextFolder) {
    Remove-Item -Path $nextFolder -Recurse -Force
    Write-Host ".next folder removed successfully" -ForegroundColor Green
} else {
    Write-Host ".next folder does not exist" -ForegroundColor Cyan
}

# Remove other potential cache files
$tempFiles = @(".next/cache", "node_modules/.cache", "out")
foreach ($tempFile in $tempFiles) {
    $tempPath = Join-Path $projectDir $tempFile
    if (Test-Path $tempPath) {
        Remove-Item -Path $tempPath -Recurse -Force -ErrorAction SilentlyContinue
        Write-Host "$tempFile removed successfully" -ForegroundColor Green
    }
}

# Step 3: Address multiple package-lock.json files
Write-Host "`nStep 3: Checking for multiple package-lock.json files..." -ForegroundColor Yellow
$packageLockFiles = Get-ChildItem -Path $projectDir -Recurse -Name "package-lock.json" -ErrorAction SilentlyContinue

if ($packageLockFiles.Count -gt 1) {
    Write-Host "Found $($packageLockFiles.Count) package-lock.json files:" -ForegroundColor Red
    foreach ($file in $packageLockFiles) {
        $fullPath = Join-Path $projectDir $file
        Write-Host "  - $fullPath" -ForegroundColor Red
    }

    Write-Host "`nThe main package-lock.json should be in the project root." -ForegroundColor Yellow
    Write-Host "All others are likely unnecessary and should be removed if they're not intentionally in subprojects." -ForegroundColor Yellow

    # Only remove package-lock.json files that are not in the project root
    foreach ($file in $packageLockFiles) {
        $fullPath = Join-Path $projectDir $file
        $dirPath = Split-Path $fullPath -Parent

        # If the directory containing package-lock.json is not the project root
        if ($dirPath -ne $projectDir) {
            Write-Host "Removing package-lock.json at: $fullPath" -ForegroundColor Red
            Remove-Item -Path $fullPath -Force -ErrorAction SilentlyContinue
        }
    }
} else {
    Write-Host "Single package-lock.json file found in project root (as expected)" -ForegroundColor Green
}

# Step 4: Fix missing font references
Write-Host "`nStep 4: Checking for missing font file GeistMonoVF.woff..." -ForegroundColor Yellow
$fontDirs = @("public/fonts", "public", "assets", "public/assets")

$foundFont = $false
foreach ($fontDir in $fontDirs) {
    $fontPath = Join-Path $projectDir $fontDir "GeistMonoVF.woff"
    if (Test-Path $fontPath) {
        Write-Host "Font file found at: $fontPath" -ForegroundColor Green
        $foundFont = $true
        break
    }
}

if (-not $foundFont) {
    Write-Host "Font file GeistMonoVF.woff not found. Looking for font references in code..." -ForegroundColor Red

    # Find files that reference the missing font
    $fontReferences = Get-ChildItem -Path $projectDir -Recurse -Include "*.js", "*.jsx", "*.ts", "*.tsx", "*.css", "*.scss", "*.sass" |
                      Select-String -Pattern "GeistMonoVF.woff" -List

    if ($fontReferences) {
        Write-Host "Found references to GeistMonoVF.woff in these files:" -ForegroundColor Yellow
        foreach ($ref in $fontReferences) {
            Write-Host "  - $($ref.Path):$($ref.LineNumber)" -ForegroundColor Red
        }

        Write-Host "`nTo fix this, you need to either:" -ForegroundColor Yellow
        Write-Host "  1. Download the GeistMonoVF.woff font file and place it in the public directory" -ForegroundColor Yellow
        Write-Host "  2. Or update the references to point to an existing font file" -ForegroundColor Yellow
    } else {
        Write-Host "No references to GeistMonoVF.woff found in the codebase" -ForegroundColor Green
    }
}

# Step 5: Ensure we're in the correct project directory and verify package.json
Write-Host "`nStep 5: Verifying project setup..." -ForegroundColor Yellow
$packageJsonPath = Join-Path $projectDir "package.json"

if (Test-Path $packageJsonPath) {
    Write-Host "package.json found in project root" -ForegroundColor Green
} else {
    Write-Host "ERROR: package.json not found in project root!" -ForegroundColor Red
    exit 1
}

# Step 6: Start the development server
Write-Host "`nStep 6: Starting Next.js development server..." -ForegroundColor Yellow

# Check if port 3000 is free, if not, Next.js will auto-select another port
$isPortFree = $true
try {
    $tcpConnection = New-Object System.Net.Sockets.TcpClient
    $tcpConnection.Connect("127.0.0.1", 3000)
    $tcpConnection.Close()
    $isPortFree = $false
} catch {
    $isPortFree = $true
}

if ($isPortFree) {
    Write-Host "Port 3000 is free, starting server on port 3000" -ForegroundColor Green
    npm run dev
} else {
    Write-Host "Port 3000 is in use, Next.js will automatically select an available port" -ForegroundColor Yellow
    npm run dev
}

Write-Host "`nScript completed!" -ForegroundColor Green
Write-Host "If you still have issues with the missing font, download GeistMonoVF.woff and place it in your public directory." -ForegroundColor Yellow