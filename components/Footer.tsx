import Link from "next/link";

function Footer() {
	return (
		<>
			<div className="w-full h-[0.5rem] bg-[#232323]"></div>
			<div className="px-[48px] py-9 bg-black">
				<Link href="/contact" className="text-[#ffffffb3] underline">
					Question? Contact us
				</Link>
				<div className="text-[#ffffffb3] cursor-pointer underline mt-6">
					<ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
						<li>FAQ</li>
						<li>Help Center</li>
						<li>Account</li>
						<li>Media Center</li>
						<li>Investor Relations</li>
						<li>Jobs</li>
						<li>Ways to Watch</li>
						<li>Terms of Use</li>
						<li>Privacy</li>
						<li>Cookie Preferences</li>
						<li>Corporate Infomation</li>
						<li>Contact Us</li>
						<li>Speed Test</li>
						<li>Legal Notices</li>
						<li>Only on Netflix</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Footer;
