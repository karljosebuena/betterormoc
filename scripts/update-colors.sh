#!/bin/bash

# Update all green gradients to navy blue
echo "🎨 Updating color theme from green to navy blue..."

# Define the files to update
files=(
  "app/contact/page.tsx"
  "app/faq/page.tsx"
  "app/government/page.tsx"
  "app/ordinances/page.tsx"
  "app/services/[slug]/page.tsx"
  "app/services/page.tsx"
  "components/home/HeroSection.tsx"
  "components/home/LeadershipSection.tsx"
  "components/home/NewsSection.tsx"
  "components/layout/Footer.tsx"
  "components/layout/Header.tsx"
  "app/budget/page.tsx"
  "app/resolutions/page.tsx"
  "app/accessibility/page.tsx"
  "components/home/WeatherMap.tsx"
  "app/statistics/page.tsx"
)

# Replace green with navy blue
for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "  Updating $file..."
    # from-green-600 to-green-800 → from-blue-900 to-blue-950
    sed -i '' 's/from-green-600 to-green-800/from-blue-900 to-blue-950/g' "$file"
    sed -i '' 's/from-green-600 via-green-700 to-green-800/from-blue-900 via-blue-950 to-blue-950/g' "$file"
    # from-green-100 to-green-200 → from-blue-100 to-blue-200
    sed -i '' 's/from-green-100 to-green-200/from-blue-100 to-blue-200/g' "$file"
    # from-blue-600 to-blue-800 → from-blue-900 to-blue-950 (standardize existing blues)
    sed -i '' 's/from-blue-600 to-blue-800/from-blue-900 to-blue-950/g' "$file"
    # from-blue-500 to-blue-600 → from-blue-800 to-blue-900
    sed -i '' 's/from-blue-500 to-blue-600/from-blue-800 to-blue-900/g' "$file"
  fi
done

echo "✅ Color theme updated to navy blue!"
