# SleepProject :sleeping::zzz::zzz:

This is a web application built with Vue 3.0 and JSON Server. It imitates a bedding shopping website where you can readily find pillows, sofas and beds. </br></br> You just need to add the items to your shopping cart and fill in some information to own these products!

## Features
|          Components               | Description                                                  | URL                  |
| :--------------------------: | ------------------------------------------------------------ | -------------------- |
|    Home    | 1. A navigation bar that directs to About, Product and Shopping Cart is provided<br>2. User can obtain general informations about sleep<br>3. Updated promotion items are exhibited via Swiper | /      |
|      About       | 1. Users are provided with our brand stories <br>2. The retail store location is added ( iframe ) | /about         |
|        Product        | 1. User can choose to reset password by providing email<br>2. User can receive an email with reset link<br>3. User can reset email by visiting reset link | /productList         |
|           Product Detail            | User can log out of an account                               | /detail?itemId        |
|      Payment-Total      | 1. User can see total amount of all expense in number<br>2. User can see total amount of each category expense on bart chart | /payment/total                    |
|      Payment-Information       | 1. User can add an expense with related info after login<br>2. User can get a warning message for invalid input format | /payment/infromation        |
|       Payment-Confirmation        | User can update detail info of an expense after login        | /payment/confirm   |
|      Payment-Success       | 1. User can delete an expense after login<br>2. User can receive a warning message before actual delete | /payment/success |
|        Page not found        | User can get an error message when travelling to a page not existing | /anyURL      |
|      Shopping Cart        | 1. User can view expense detail after login<br>2. User can get an error message when no expense to display after login |                     |
|      Breadscrumb        | 1. User can view expense detail after login<br>2. User can get an error message when no expense to display after login |                     |

## Tools
1. Designs&nbsp; (&nbsp;Bootstrap + Sass&nbsp;)
2. Framework&nbsp; (&nbsp;Vue&nbsp;)
3. Building tool&nbsp; (&nbsp;Vite&nbsp;) 
4. Storage&nbsp; (&nbsp;Pinia&nbsp;)
5. Backend&nbsp; (&nbsp;JSON Server&nbsp;)
6. Deployment&nbsp; (&nbsp;Vercel&nbsp;)
7. Code check&nbsp; (&nbsp;husky + lint-staged&nbsp;)

## Installation
Please follow the instructions to get a copy of this project.

### Prerequisites
 * <a href="https://pnpm.io/installation">pnpm</a> 

### Install pnpm packages
```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

## Authors
:smiley: <a href="https://github.com/wooiseong">wooiseong</a> :smiley:
