import { FaXTwitter, FaLinkedinIn, FaGithub, FaInstagram, FaMedium, FaCodepen } from 'react-icons/fa6';

export default function Contact() {
  return (
    <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-24 text-center">
      <h2 className="text-4xl font-bold mb-4">Contact</h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Interested in hiring me for your project or just want to say hi? You can send me an email{' '}
        <a href="mailto:kartikkumar84094@gamil.com" className="text-green-400 hover:underline">
          kartikkumar84094@gamil.com
        </a>
        .
      </p>
      <p className="text-gray-400 mt-6">Want to get connected? Follow me on the social channels below.</p>

      <div className="flex justify-center items-center space-x-6 mt-6 text-green-400 text-2xl">
        <a href="https://x.com/Kartikk97429066" aria-label="X"><FaXTwitter /></a>
        <a href="https://www.linkedin.com/in/kartik-kumar-2942211ab/" aria-label="LinkedIn"><FaLinkedinIn /></a>
        <a href="https://github.com/Kartik84094" aria-label="GitHub"><FaGithub /></a>
        {/* <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a> */}
        <a href="https://medium.com/@kartikkumar84094" aria-label="Medium"><FaMedium /></a>
        {/* <a href="https://codepen.io" aria-label="Codepen"><FaCodepen /></a> */}
      </div>
    </section>
  );
}
