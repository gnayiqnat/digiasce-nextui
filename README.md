# Digital Ascent

This is the website for Digital Ascent, an indie game development team. 

[https://digitalascent.space](https://digitalascent.space)

## Technologies Used

- [Vite](https://vitejs.dev/guide/)
- [NextUI](https://nextui.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org)
- [Framer Motion](https://www.framer.com/motion)
- [Aceternity](https://ui.aceternity.com)
- [Supabase](https://supabase.com)
- [Cloudflare Turnstiles](https://www.cloudflare.com/products/turnstile)


<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

**📌 Skip step 1, 2, 3, 4, 5 and 8 if you plan on ditching/reworking the contact us page functionality.**

1. Create a Supabase account
2. Create a Supabase table named email with 2 columns, email and content.
3. Get API Key and database URL at [https://supabase.com](https://supabase.com)
4. Create a Cloudflare account
5. Get Turnstile site key from [https://cloudflare.com](https://www.cloudflare.com/products/turnstile/)
6. Clone the repo
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
7. Install NPM packages
   ```sh
   npm install
   ```
8. Enter your API in `.env.local`
   ```js
   VITE_APP_URL=`Enter your Supabase URL`
   VITE_APP_ANON_KEY=`Enter your Supabase API Key`
   VITE_APP_TURNSTILE_KEY=`Enter your Cloudflare Turnstile key`
   ```

## Contributing
Contributions are welcome! Feel free to submit bug reports, feature requests, or even pull requests to help improve the website for everyone.

## Legal Notices
The code in this repository is licensed under the MIT License (see LICENSE.txt).

All logos, photos, and other proprietary information on this website are copyrighted by Digital Ascent and are provided solely for informational purposes. They may not be used, reproduced, distributed, or modified without prior written consent from Digital Ascent.

## Contact
For support or questions, you can reach out to the project maintainer at contact@tanqiyang.com
