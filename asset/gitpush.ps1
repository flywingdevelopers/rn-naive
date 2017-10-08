if ($args.Length -gt 0)
{
  $c = $args[0]
} else
{
  $c = "Normal commit"
}
git add .
git commit -m $c
git push
