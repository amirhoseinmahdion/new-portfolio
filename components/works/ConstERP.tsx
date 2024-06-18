import { motion } from "framer-motion";
import Link from "next/link";
import { TiArrowForward } from "react-icons/ti";

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Engineer
        <span className="text-textGreen tracking-wide">  <Link href="https://demo.consterp.ir/" target="_blank">demo.consterp</Link></span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        april 2024 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Using this program as an ERP software and managing people in the
          organization and tracking all their work
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          The important part of follow-up is that it has the ability to
          communicate with all its employees, such as chatting, meeting
          requests, and creating requests and tasks that we need to do.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          This is our software using Next and Typescript and using css
          frameworks such as Tailwind and MaterialUI .
        </li>
      </ul>
    </motion.div>
  );
};

export default ReactBD;
