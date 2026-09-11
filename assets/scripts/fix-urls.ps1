$files = Get-ChildItem -Path "c:\Users\solomonrajan\Documents\GitHub\solomonrajan.github.io" -Include *.html,*.js -Recurse -File
foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw
    $original = $content
    
    $content = $content -replace 'href="index\.html"', 'href="/"'
    $content = $content -replace 'href="about\.html"', 'href="/about"'
    $content = $content -replace 'href="portfolio\.html"', 'href="/portfolio"'
    $content = $content -replace 'href="blog\.html"', 'href="/blog"'
    $content = $content -replace 'href="contact\.html"', 'href="/contact"'
    $content = $content -replace 'href="updates\.html"', 'href="/updates"'
    
    $content = $content -replace 'href="\.\./\.\./index\.html"', 'href="/"'
    $content = $content -replace 'href="\.\./\.\./about\.html"', 'href="/about"'
    $content = $content -replace 'href="\.\./\.\./portfolio\.html"', 'href="/portfolio"'
    $content = $content -replace 'href="\.\./\.\./blog\.html"', 'href="/blog"'
    $content = $content -replace 'href="\.\./\.\./contact\.html"', 'href="/contact"'
    $content = $content -replace 'href="\.\./\.\./updates\.html"', 'href="/updates"'
    
    if ($content -cne $original) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Output "Updated $($file.FullName)"
    }
}
