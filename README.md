# SleepProject :sleeping::zzz:

This is a web application built with Vue 3.0 and JSON Server. It imitates a bedding shopping website where you can readily find pillows, sofas and beds. </br></br> You just need to add the items to your shopping cart and fill in some information to own these products!

## Features
|          Components               | Description                                                  | URL                  |
| :--------------------------: | ------------------------------------------------------------ | -------------------- |
|    Home    | 1. A navigation bar that directs to About, Product and Shopping Cart is provided<br>2. User can obtain general informations about sleep<br>3. Updated promotion items are exhibited via Swiper | /      |
|      About       | 1. Users are provided with our brand stories <br>2. The retail store location is added ( iframe ) | /about         |
|      Product        | 1. A full list of products is displayed. <br>2. Users can select products through category filters  | /productList         |
|      Product Detail  | 1. Users can view all details of the intersted product and add it to the shopping cart              | /detail?itemId        |
|      Payment-Total     | 1. A summary of products stored in shopping cart is provided<br> | /payment/total                    |
|      Payment-Information       | 1. Informations about the users are required<br>2. Users will get a warning message for invalid input format | /payment/infromation       |
|       Payment-Confirmation        | 1. A summary of products and information is set up<br> 2. A modal will popped up for final confirmation       | /payment/confirm   |
|      Payment-Success       | 1. Congraz!:clap::clap::clap:<br> 2. The order reference number is produced and click-to-copy function is provided    | /payment/success |
|        Page not found        | Users will be directed to this page if the URL does not match any route | /anyURL      |
|      Shopping Cart        | 1. Users can change the quantity and drop unwanted products |                     |
|      Breadscrumb        | 1. Users can be directed to parent pages  |                     |

## Tools
1. Designs&nbsp; (&nbsp;Bootstrap + Sass&nbsp;)
2. Framework&nbsp; (&nbsp;Vue&nbsp;)
3. Building tool&nbsp; (&nbsp;Vite&nbsp;) 
4. Storage&nbsp; (&nbsp;Pinia&nbsp;)
5. Validation&nbsp; (&nbsp;vee-validate + yup&nbsp;)
6. Backend&nbsp; (&nbsp;JSON Server&nbsp;)
7. Deployment&nbsp; (&nbsp;Vercel&nbsp;)
8. Code check&nbsp; (&nbsp;husky + lint-staged&nbsp;)

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
