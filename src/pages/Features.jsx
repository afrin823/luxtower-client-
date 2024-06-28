import { FaBuilding } from "react-icons/fa";
import { PiHouseLine } from "react-icons/pi";
import { RiBuilding2Line } from "react-icons/ri";


const Features = () => {
    return (
        <div>
            <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center py-3">
			<h2 className="text-4xl font-bold">What Can We Help You Find?
            </h2>
			<p className="font-serif text-sm dark:text-gray-600">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
			<article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
				<PiHouseLine  className="object-cover text-sky-400 w-full h-24" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<h3 className="flex-1 py-2 text-center text-2xl font-semibold leading-snug">Buy a new home
					</h3>
					<p className="text-center">Property management is the daily oversight of residential, commercial, or industrial real estate by a third-party contractor.</p>
					
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<FaBuilding  className="object-cover text-sky-400 w-full h-24 py-3" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<h3 className="py-3 text-center text-2xl font-semibold leading-snug">Sell a home</h3>
					<p className="text-center">Property management is the daily oversight of residential, commercial, or industrial real estate by a third-party contractor.</p>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
				<RiBuilding2Line  className="object-cover text-sky-400 w-full h-24" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<h3 className="text-2xl py-3 text-center font-semibold leading-snug">Rent a home
					</h3>
					<p className="text-center">Property management is the daily oversight of residential, commercial, or industrial real estate by a third-party contractor.</p>
				</div>
			</article>

		</div>
	</div>
</section>
        </div>
    );
};

export default Features;