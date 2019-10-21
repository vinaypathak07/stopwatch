workflow "on push" {
  on = "push"
  resolves = ["prettier"]
}

action "prettier" {
  uses = "bltavares/actions/prettier@master"
  args = ["autofix"]
  secrets = ["GITHUB_TOKEN"]
}

workflow "on pull request merge, delete the branch" {
  on = "pull_request"
  resolves = ["branch cleanup"]
}

action "branch cleanup" {
  uses = "jessfraz/branch-cleanup-action@master"
  secrets = ["GITHUB_TOKEN"]

  env = {
    NO_BRANCH_DELETED_EXIT_CODE = "0"
  }
} 
