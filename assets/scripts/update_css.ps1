$files = Get-ChildItem -Path "c:\Users\solomonrajan\Documents\GitHub\solomonrajan.github.io" -Filter "index.html" -Recurse
foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    $target = "      .section-title {`n        color: var(--md-sys-color-on-surface);`n        margin: 0 0 12px;`n        font-size: clamp(28px, 4vw, 40px);`n        font-weight: 700;`n        line-height: 1.2;`n      }"
    $replacement = "      .section-title {`n        color: var(--md-sys-color-on-surface);`n        margin: 0 0 12px;`n        font-size: clamp(28px, 4vw, 40px);`n        font-weight: 700;`n        line-height: 1.2;`n        width: fit-content;`n        position: relative;`n      }`n      .section-title::after {`n        content: '';`n        position: absolute;`n        bottom: -6px;`n        left: 0;`n        width: 100%;`n        height: 12px;`n        background-color: var(--md-sys-color-primary);`n        -webkit-mask: url('data:image/svg+xml;utf8,<svg xmlns=""http://www.w3.org/2000/svg"" viewBox=""0 0 20 12"" width=""20"" height=""12""><path d=""M0 6 Q 5 0, 10 6 T 20 6"" fill=""none"" stroke=""black"" stroke-width=""3"" stroke-linecap=""round""/></svg>') repeat-x;`n        mask: url('data:image/svg+xml;utf8,<svg xmlns=""http://www.w3.org/2000/svg"" viewBox=""0 0 20 12"" width=""20"" height=""12""><path d=""M0 6 Q 5 0, 10 6 T 20 6"" fill=""none"" stroke=""black"" stroke-width=""3"" stroke-linecap=""round""/></svg>') repeat-x;`n        -webkit-mask-size: 20px 12px;`n        mask-size: 20px 12px;`n        clip-path: inset(0 100% 0 0);`n        animation: drawCurlyLine 1.5s ease-out forwards 0.2s;`n      }`n      @keyframes drawCurlyLine {`n        to {`n          clip-path: inset(0 0 0 0);`n        }`n      }"
    if ($content.Contains($target)) {
        $content = $content.Replace($target, $replacement)
        [System.IO.File]::WriteAllText($file.FullName, $content)
        Write-Host "Updated $($file.FullName)"
    }
}
