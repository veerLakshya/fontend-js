import { useState } from "react";
import { useSelector } from "react-redux";
import OngoingTreatmentForm from "./OngoingTreatmentForm";

const OngoingTreatmentTable = () => {
	const patientDetails = useSelector((store) => store.patient.patient);
	const [isFormVisible, setIsFromVisible] = useState(false);
	return (
		<div className="overflow-x-auto w-full h-full">
			<table className="min-w-full bg-white border border-gray-200">
				<thead className="bg-gray-100">
					<tr>
						<th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">
							Patient Name
						</th>
						<th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">
							IsActive
						</th>
						<th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">
							Diagnosed With
						</th>
					</tr>
				</thead>
				<tbody>
					{patientDetails.map((patient, index) => (
						<tr key={index} className="hover:bg-gray-50">
							<td className="py-3 px-4 border-b">
								{patient.PatientName}
							</td>
							<td className="py-3 px-4 border-b">
								{patient.iscompleted ? "Completed" : "Ongoing"}
							</td>
							<td className="py-3 px-4 border-b">
								{patient.DiagonsedWith}
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<button
				onClick={() => setIsFromVisible(true)}
				className="mt-10 p-4 bg-green-500 text-white hover:bg-green-600 transition-all duration-300 font-bold rounded-lg "
			>
				Add New Treatment
			</button>
			<OngoingTreatmentForm setIsFromVisible isVisible={isFormVisible} />
		</div>
	);
};

export default OngoingTreatmentTable;
