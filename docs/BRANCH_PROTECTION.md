# Branch Protection Rules

## Setup Instructions

These branch protection rules should be enabled in GitHub repository settings before production release.

### For `main` branch:

```yaml
# TODO: Enable these rules in GitHub Settings > Branches before production release

Branch protection rules for 'main':
  ✓ Require a pull request before merging
    - Require approvals: 1
    - Dismiss stale pull request approvals when new commits are pushed
    - Require review from Code Owners

  ✓ Require status checks to pass before merging
    - Require branches to be up to date before merging
    - Status checks that are required:
      - lint-and-type-check
      - build

  ✓ Require conversation resolution before merging

  ✓ Require signed commits (optional, recommended for production)

  ✓ Require linear history

  ✓ Include administrators (enforce rules for admins too)

  ✗ Allow force pushes (disabled)

  ✗ Allow deletions (disabled)
```

### For `develop` branch:

```yaml
# TODO: Enable these rules in GitHub Settings > Branches before production release

Branch protection rules for 'develop':
  ✓ Require a pull request before merging
    - Require approvals: 1

  ✓ Require status checks to pass before merging
    - Status checks that are required:
      - lint-and-type-check
      - build

  ✓ Require conversation resolution before merging

  ✗ Allow force pushes (disabled)
```

## How to Enable

1. Go to GitHub repository settings
2. Navigate to "Branches" section
3. Click "Add branch protection rule"
4. Enter branch name pattern (`main` or `develop`)
5. Enable the checkboxes as specified above
6. Click "Create" or "Save changes"

## Notes

- These rules are currently **commented out** and documented here
- Enable them when ready for production release
- Test the CI/CD pipeline thoroughly before enforcing these rules
- Adjust approval requirements based on team size
