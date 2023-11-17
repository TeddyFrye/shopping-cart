import { useState } from "react";
import "../styles/Terms.css";

const Terms = () => {
  const [name, setName] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name) {
      setAgreed(true);
    } else {
      alert("Please enter your name to agree to the terms.");
    }
  };

  return (
    <div className="terms">
      <h1>Tarcet Terms and Services Agreement</h1>
      <p>
        <strong>Last Updated:</strong> <em>Whenever We Felt Like It</em>
      </p>
      <br></br>
      <p>
        Welcome to Tarcet, your not-quite-Target destination for almost
        everything you didn&apos;t know you didn&apos;t need. By using our
        website, you agree to be bound by the following terms and conditions
        (the &quot;Terms&quot;). Please read them carefully, or not, we
        can&apos;t really tell.
      </p>

      <h2>1. Who We Are</h2>
      <p>
        Tarcet is a completely unofficial and entirely made-up online store. We
        are not related to any other company, especially not one that might
        resemble a certain large retailer with a similar name. Any resemblance
        is purely coincidental and a little bit intentional.
      </p>

      <h2>2. What We Sell</h2>
      <p>
        We offer a variety of products, from A to B. Yes, you read that right.
        Our range is somewhat limited. Expect to find items like left-handed
        screwdrivers, sky hooks, tartan paint, and more. Availability may vary
        based on lunar cycles and our staff&apos;s mood swings.
      </p>

      <h2>3. Use of the Site</h2>
      <p>
        You are welcome to browse the Site, chuckle a bit, and wonder what life
        choices led you here. Please do not attempt to make actual purchases, as
        our shopping cart is powered by wishful thinking and tends to vanish at
        checkout.
      </p>

      <h2>4. Intellectual Property</h2>
      <p>
        Our logo, a blatant rip-off with a slight twist, and all site content
        are probably copyrighted, but who&apos;s checking? You may not use them
        without our permission, which you won&apos;t get because we&apos;re too
        busy not existing.
      </p>

      <h2>5. Liability Limitation</h2>
      <p>
        Tarcet cannot be held responsible for anything, ever. If you experience
        any issues, remember that you get what you pay for, and here, you pay
        nothing.
      </p>

      <h2>6. Governing Law</h2>
      <p>
        This agreement shall be governed by the laws of the Land of Mordor. Any
        disputes will be resolved via Trial by Combat.
      </p>

      <h2>7. Changes to Terms</h2>
      <p>
        We reserve the right to change these terms whenever we feel like it, for
        any reason or no reason at all. It&apos;s not like they&apos;re legally
        binding or anything.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        Don&apos;t. We won&apos;t respond. We&apos;re a figment of your
        imagination.
      </p>

      <p>
        By continuing to use Tarcet, you acknowledge that you&apos;ve either
        read and understood these terms (congratulations on making it this far)
        or you haven&apos;t (which is more likely). Either way, enjoy your
        completely unreal shopping experience!
      </p>

      {!agreed && (
        <form onSubmit={handleSubmit}>
          <label>
            Sign here if you agree:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}

      {agreed && <p>Thank you, {name}, for agreeing to our terms.</p>}
    </div>
  );
};

export default Terms;
