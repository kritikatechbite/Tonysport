#!/bin/sh
# Usage: ./set-domain.sh https://www.yourdomain.ca
# Replaces the placeholder domain in canonical, Open Graph, sitemap and robots files.
[ -z "$1" ] && { echo "Usage: $0 https://your-domain"; exit 1; }
D="${1%/}"
grep -rl "https://YOUR-DOMAIN.TLD" --include=*.html --include=*.xml --include=*.txt . | while read f; do sed -i "s#https://YOUR-DOMAIN.TLD#$D#g" "$f"; done
echo "Domain set to $D"
