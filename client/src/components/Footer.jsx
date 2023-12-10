import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { ImPhone } from "react-icons/im";
import { HiBuildingStorefront } from "react-icons/hi2";

import { footerLinks1 } from "../constants/footer";
import { discover, mastercard, paypal, stripe, visa } from "../assets";

const SocialIcon = ({ link, icon }) => {
	const Icon = icon;

	return (
		<Link
			to={link}
			target="_blank"
			rel="noreferrer"
			className="text-xl border p-2 rounded-full cursor-pointer hover:bg-neutral-50 hover:text-primary hover:border-primary"
		>
			<Icon />
		</Link>
	);
};

const Footer = () => {
	return (
		<div className="w-full">
			<div className="container mx-auto px-5 md:px-10 py-10">
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
					<div className="flex flex-col gap-5 flex-1 w-full">
						<Link
							to="/"
							className="w-fit flex items-center gap-1 sm:gap-2 font-medium sm:text-lg py-2 px-2 sm:px-3 md:px-2 lg:px-3 rounded-md bg-primary text-white whitespace-nowrap"
						>
							<span className="text-lg sm:text-2xl">
								<HiBuildingStorefront />
							</span>
							<span>Red Store</span>
						</Link>
						<p className="text-sm md:text-base">
							There are many variations of passages of mens, womens, and babies
							and have Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Voluptates rerum id numquam, sequi totam sunt consectetur.
						</p>
						<div className="flex items-center gap-2">
							<SocialIcon
								link="https://github.com/NaseemKhan005"
								icon={FaGithub}
							/>
							<SocialIcon
								link="https://www.linkedin.com/in/naseemkhann"
								icon={FaLinkedin}
							/>
							<SocialIcon link="https://naseemkhan.vercel.app" icon={GiWorld} />
							<SocialIcon link="tel:+92 3444170400" icon={FaWhatsapp} />
						</div>
					</div>

					<div className="flex-1 w-full flex items-start gap-10">
						<div className="flex flex-col flex-1 w-full gap-3 capitalize">
							<h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-5">
								useful links
							</h2>
							{footerLinks1.map((link) => (
								<Link
									key={link.id}
									to={link.link}
									target="_blank"
									rel="noreferrer"
									className="hover:underline hover:text-black/60"
								>
									{link.title}
								</Link>
							))}
						</div>
						<div className="flex flex-col flex-1 w-full gap-3 capitalize">
							<h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-5">
								quick links
							</h2>
							{footerLinks1.map((link) => (
								<Link
									key={link.id}
									to={link.link}
									target="_blank"
									rel="noreferrer"
									className="hover:underline hover:text-black/60"
								>
									{link.title}
								</Link>
							))}
						</div>
					</div>

					<div className="flex-1 w-full flex flex-col gap-3">
						<h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-5 capitalize">
							contact
						</h2>
						<div className="flex flex-col gap-5">
							<div className="flex items-center gap-1">
								<span className="text-2xl">
									<IoMail />
								</span>
								<a href="mailto:naseemsaffy@gamil.com">naseemsaffy@gamil.com</a>
							</div>
							<div className="flex items-center gap-1 ml-0.5">
								<span className="text-xl">
									<ImPhone />
								</span>
								<a href="tel:+92 3444170400">+92 3444170400</a>
							</div>
							<div className="flex items-center gap-1">
								<span className="text-2xl">
									<IoLocationSharp />
								</span>
								<p>Shamsabad, 6th Road, Satellite Town, Rwp</p>
							</div>

							<div className="flex items-center gap-2">
								<img
									src={mastercard}
									alt="credit card"
									className="w-10 object-cover"
								/>
								<img
									src={stripe}
									alt="credit card"
									className="w-11 object-cover bg-white border rounded-md p-1"
								/>
								<img
									src={paypal}
									alt="credit card"
									className="w-10 object-cover"
								/>
								<img
									src={visa}
									alt="credit card"
									className="w-10 object-cover"
								/>
								<img
									src={discover}
									alt="credit card"
									className="w-10 object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<p className="text-center border-t py-8 mt-8 md:mt-14 sm:text-base text-sm">
				copyright © {new Date().getFullYear()} - All rights reserved by{" "}
				<Link
					to="https://naseemkhan.vercel.app"
					target="_blank"
					rel="noreferrer"
					className="hover:underline hover:text-primary"
				>
					Naseem Khan.
				</Link>
			</p>
		</div>
	);
};

export default Footer;
