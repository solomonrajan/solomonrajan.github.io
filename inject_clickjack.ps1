$htmlFiles = Get-ChildItem -Path . -Recurse -Filter *.html | Where-Object { $_.FullName -notmatch '\.git' }
$frameBustCode = @"
  <!-- Anti-Clickjacking -->
  <style id="antiClickjack">body{display:none !important;}</style>
  <script type="text/javascript">
    if (self === top) {
      var antiClickjack = document.getElementById("antiClickjack");
      antiClickjack.parentNode.removeChild(antiClickjack);
    } else {
      top.location = self.location;
    }
  </script>
</head>
"@

foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw
    if ($content -notmatch "id=`"antiClickjack`"") {
        $content = $content -replace "</head>", $frameBustCode
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8
    }
}
