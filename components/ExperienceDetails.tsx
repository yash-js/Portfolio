import { motion } from 'framer-motion';
import { TiArrowForward } from 'react-icons/ti';

interface ExperienceDetailsProps {
    role: string;
    company: string;
    companyUrl?: string;
    startDate: string;
    endDate: string;
    responsibilities: string[];
}

const ExperienceDetails: React.FC<ExperienceDetailsProps> = ({
    role,
    company,
    companyUrl,
    startDate,
    endDate,
    responsibilities,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full"
        >
            <h3 className="flex gap-1 font-medium text-xl font-titleFont">
                {role}{' '}
                <span className="tracking-wide text-textGreen">
                    @{' '}
                    {companyUrl ? (
                        <a href={companyUrl} target="_blank" rel="noopener noreferrer">
                            {company}
                        </a>
                    ) : (
                        company
                    )}
                </span>
            </h3>
            <p className="text-sm mt-1 font-medium text-textDark">
                {startDate} - {endDate}
            </p>
            <ul className="mt-6 flex flex-col gap-3">
                {responsibilities.map((responsibility, index) => (
                    <li key={index} className="text-base flex gap-2 text-textDark">
                        <span>
                            <TiArrowForward />
                        </span>
                        {responsibility}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

export default ExperienceDetails;
