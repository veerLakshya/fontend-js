// Form.js
import React, { useRef } from "react";

const OngoingTreatmentForm = ({ isVisible, setIsFromVisible }) => {
	const reportRef = useRef(null);
	const prescriptionRef = useRef(null);
	const remarksRef = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const report = reportRef.current.value;
		const prescription = prescriptionRef.current.value;
		const remarks = remarksRef.current.value;

		// Handle form submission logic here
		console.log("Form submitted:", {
			report,
			prescription,
			remarks,
		});
	};

	return (
		<div
			className={` ${
				!isVisible && " hidden "
			} fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center`}
		>
			<div className="bg-white rounded-lg shadow-lg p-8 w-1/2">
				<h2 className="text-lg font-bold mb-4"></h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="report"
						>
							Report
						</label>
						<textarea
							ref={reportRef}
							id="report"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							placeholder="Enter report"
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="prescription"
						>
							Prescription
						</label>
						<textarea
							ref={prescriptionRef}
							id="prescription"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							placeholder="Enter prescription"
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="remarks"
						>
							Remarks
						</label>
						<textarea
							ref={remarksRef}
							id="remarks"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							placeholder="Enter remarks"
						/>
					</div>
					<button
						onClick={() => setIsFromVisible(false)}
						type="submit"
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default OngoingTreatmentForm;
