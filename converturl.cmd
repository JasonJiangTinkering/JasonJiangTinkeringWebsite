@echo off
REM Check if URL is provided
IF "%~1"=="" (
    echo Usage: %~nx0 ^<url^>
    exit /b 1
)

set "url=%~1"

REM Remove the protocol (http:// or https://)
setlocal enabledelayedexpansion
set "url_no_proto=%url:http://=%"
set "url_no_proto=!url_no_proto:https://=!"

REM Remove the domain name (everything up to and including the first '/')
for /f "tokens=1* delims=/" %%A in ("!url_no_proto!") do (
    set "path=/%%B"
)

REM If there was no path, set to "/"
if "!path!"=="/" (
    set "path=/"
) else (
    REM Remove any trailing spaces
    for /f "tokens=* delims= " %%P in ("!path!") do set "path=%%P"
)
REM Add the new prefix
set "new_url=https://dsm.jasonjiangtinkering.com!path!"

echo !new_url!|clip.exe

echo New URL copied to clipboard: !new_url!
endlocal
