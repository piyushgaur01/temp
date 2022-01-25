# Git Strategy & Best Practices

> With great power comes great responsibility!
>
>-- <cite>Spiderman</cite>  

## First things first
Setup your identity in global git config.

```
$ git config --global user.name "Piyush Gaur"
$ git config --global user.email piyush.gaur@adani.com
```

Setup editor - this command sets VSCode as the default editor. 

```
$ git config --global core.editor "code --wait"
```

## Branching Strategy

Gitflow branching strategy is used as we mostly work on scheduled releases (v1.1, v2.0 etc).

<img src="https://wac-cdn.atlassian.com/dam/jcr:cc0b526e-adb7-4d45-874e-9bcea9898b4a/04%20Hotfix%20branches.svg?cdnVersion=176" alt="branching" width="600px"/>

In a nutshell Gitflow is:
- A `develop` branch is created from `main`
- A `release` branch is created from `develop`
- Feature branches are created from develop
- When a feature is complete it is merged into the `develop` branch
- When the `release` branch is done it is merged into `develop` and `main`
- If an issue in `main` is detected a hotfix branch is created from `main`
- Once the hotfix is complete it is merged to both `develop` and `main`

For detailed information, read [this article.](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

Note: `main` or `master` means same.


## Branching Conventions

Always branch from `develop`

`dev/type/issue-id`

where
- `type`: epic, bug, story, task
- JIRA `issue` reference and small kebab-case description

`dev/[epic|bug|story|task]/[NOC-123456]-kebab-case-description`

## Best Practices

- **Write descriptive and meaningful commit messages**

    - Separate subject from body with a blank line
    - Limit the subject line to 50 characters
    - Do not end the subject line with a period
    - Wrap the body at 72 characters
    - Use the body to explain what and why vs. how
    - If it impacts other stories mention them too in the body

    ```
    $ git log
    commit 42e769bdf4894310333942ffc5a15151222a87be
    Author: Piyush Gaur <piyush.gaur@adani.com>
    Date:   Sat Jan 01 00:00:00 2022 +0530

    Derezz the master control program

    MCP turned out to be evil and had become intent on world domination.
    This commit throws Tron's disc into MCP (causing its deresolution)
    and turns it back into a chess game.

    Resolves: NOC-123
    See also: NOC-456, NOC-789
    ```

- **Squash commits before merging**: When working on your feature branch, it's fine to add a commit for even minor changes. However, if every feature branch produced 50 commits, the resulting number of commits in the master branch could grow unnecessarily large as features are added. In general, there should only be one or a few commits added to master from each feature branch. To achieve this, squash multiple commits into one or a handful of commits with more elaborate messages for each one. This could be achieved using:

    ```
    git rebase -i HEAD~20  # look at up to 20 commits to consider squashing
    ```

- **Git Merge vs Rebase**: use git merge whenever merging your changes with any of the public branches (develop, main). Rebase should only be used when working your own private branch. Rebase is a very powerful command and has the power to rewrite history so caution should be exercised.

- Force push is disabled on public branches. **DO NOT OVERRIDE** even if the building is on fire.

- The `main` or `master` branch should always be in a pristine state and in sync with production. Releases should be managed by tagging the appropriate commits with correct version numbers.