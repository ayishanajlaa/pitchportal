import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 mt-16 px-5 md:px-16 py-10 md:py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Column 1 */}
        <div>
          <Link href="/" className="text-3xl">
            <span className="text-teal-600">Pitch</span> Portal
          </Link>
          <p className="max-w-xs mt-4 text-sm">
            Streamline your pitch creation process with our innovative tools
            and templates.
          </p>
          <div className="flex mt-8 space-x-6">
            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              className="hover:text-teal-600"
            >
              <LinkedInIcon />
            </Link>
            <Link
              href="https://github.com/"
              target="_blank"
              className="hover:text-teal-600"
            >
              <GitHubIcon />
            </Link>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <p className="font-medium">Company</p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm">
            <Link href="/about" className="hover:text-teal-600">
              About Us
            </Link>
            <Link href="/team" className="hover:text-teal-600">
              Our Team
            </Link>
            <Link href="/contact" className="hover:text-teal-600">
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Column 3 */}
        <div>
          <p className="font-medium">Support</p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm">
            <Link href="/faq" className="hover:text-teal-600">
              FAQs
            </Link>
            <Link href="/privacy" className="hover:text-teal-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-teal-600">
              Terms &amp; Conditions
            </Link>
          </nav>
        </div>

        {/* Column 4 */}
        <div>
          <p className="font-medium">Services</p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm">
            <Link href="/coaching" className="hover:text-teal-600">
              Coaching
            </Link>
            <Link href="/review" className="hover:text-teal-600">
              Company Review
            </Link>
            <Link href="/accounts" className="hover:text-teal-600">
              Accounts Review
            </Link>
            {/* <Link href="/consulting" className="hover:text-teal-600">
              HR Consulting
            </Link>
            <Link href="/seo" className="hover:text-teal-600">
              SEO Optimisation
            </Link> */}
          </nav>
        </div>

        {/* Column 5 */}
        <div>
          <p className="font-medium">Social</p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm">
            <Link
              href="https://twitter.com/"
              target="_blank"
              className="hover:text-teal-600"
            >
              Twitter
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              className="hover:text-teal-600"
            >
              Instagram
            </Link>
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              className="hover:text-teal-600"
            >
              Facebook
            </Link>
          </nav>
        </div>
      </div>
      <p className="mt-8 text-xs text-center">© 2024 Pitch Portal - All rights reserved</p>
    </footer>
  );
};

export default Footer;
