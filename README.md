![Build Status](https://gitlab.com/pages/docusaurus/badges/master/pipeline.svg)

---

Example [Docusaurus](https://docusaurus.io/) website using GitLab Pages.

Learn more about GitLab Pages at https://about.gitlab.com/features/pages and the official
documentation https://docs.gitlab.com/ee/user/project/pages/.

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [GitLab CI/CD](#gitlab-cicd)
- [Building locally](#building-locally)
- [Set url and baseUrl in docusaurus.config.js](#set-url-and-baseurl-in-docusaurusconfigjs)
    - [GitLab User or Group Pages](#gitlab-user-or-group-pages)
    - [When you have forked this project](#when-you-have-forked-this-project)
    - [When you have forked this project and unique domain is disabled](#when-you-have-forked-this-project-and-unique-domain-is-disabled)
- [Did you fork this project?](#did-you-fork-this-project)
- [Troubleshooting](#troubleshooting)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## GitLab CI/CD

This project's static Pages are built by [GitLab CI/CD](https://about.gitlab.com/product/continuous-integration/),
following the steps defined in [`.gitlab-ci.yml`](.gitlab-ci.yml):

```yaml
image: node:18-alpine3.20

stages:
  - test
  - deploy

test:
  stage: test
  script:
    - yarn install
    - yarn build
  rules:
    - if: $CI_COMMIT_REF_NAME != $CI_DEFAULT_BRANCH

create-pages:
  stage: deploy
  script:
    - yarn install
    - yarn build
    - mv ./build public
  pages: true
  rules:
    - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
```

## Building locally

To work locally with this project, you'll have to follow the steps below:

1. Fork, clone or download this project.
1. Install Docusaurus:

   ```sh
   yarn install
   ```

1. Preview your project:

   ```sh
   yarn start
   ```

   Your site can be accessed under http://localhost:3000.

1. Add content.
1. Generate the website (optional):

   ```sh
   yarn build
   ```

   The website will be built under `build/`.

Read more at the [Docusaurus documentation](https://docusaurus.io).

## Set url and baseUrl in docusaurus.config.js

### GitLab User or Group Pages

If you have forked this project, in order to use it as your user/group website
served on the root path, you will need to:

1. Change the path of your project to `namespace.gitlab.io`, where `namespace` is
   your `username` or `groupname`. This can be done by navigating to your
   project's **Settings > General** page under the Advanced section.
1. Open `docusaurus.config.js` and change:
   1. The `url` to be `https://namespace.gitlab.io` or your
      [custom domain](https://docs.gitlab.com/user/project/pages/custom_domains_ssl_tls_certification/) of choice.
   1. The `baseUrl` to be '/'.

### When you have forked this project

1. Open `docusaurus.config.js` and change:
   1. Copy deployed pages url and update `url` (Example: `https://project-123456.gitlab.io`) or your
      [custom domain](https://docs.gitlab.com/user/project/pages/custom_domains_ssl_tls_certification/) of choice.
   1. The `baseUrl` to be '/'.

### When you have forked this project and unique domain is disabled

If you [disable the unique domain](https://docs.gitlab.com/user/project/pages/#unique-domains), you will need to:

1. Open `docusaurus.config.js` and change:
   1. The `url` to be `https://namespace.gitlab.io` or your
      [custom domain](https://docs.gitlab.com/user/project/pages/custom_domains_ssl_tls_certification/) of choice.
   1. The `baseUrl` to be the same as the name of your project when custom domain is not set.

Read more about the [types of GitLab Pages](https://docs.gitlab.com/user/project/pages/getting_started_part_one/).

## Did you fork this project?

If you forked this project for your own use, please go to your project's
**Settings > General > Advanced** and remove the forking relationship, which
won't be necessary unless you want to contribute back to the GitLab upstream project.

## Troubleshooting

1. CSS is missing! That means two things:

    Either that you have wrongly set up the CSS URL in your templates, or
    your static generator has a configuration option that needs to be explicitly
    set in order to serve static assets under a relative URL.
