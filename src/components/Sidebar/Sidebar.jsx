import {AcademicCapIcon, InformationCircleIcon, ListBulletIcon} from "@heroicons/react/24/outline";
import Bottom from "./Bottom.jsx";
function Sidebar(props) {
    return (
        <aside className="fixed top-0 left-0 w-64 h-full" aria-label="Sidenav">
            <div
                className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <ul className="space-y-2">
                    <li>
                        <a href="src/components#"
                           className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                            <ListBulletIcon className="h-6 w-6 text-gray-500" />
                            <span className="ml-3">My questions</span>
                        </a>
                    </li>
                    <li>
                        <a href="src/components#"
                           className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                            <AcademicCapIcon className="h-6 w-6 text-gray-500" />
                            <span className="ml-3">My quizzes</span>
                        </a>
                    </li>
                    <li>
                        <a href="src/components#"
                           className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                            <InformationCircleIcon className="h-6 w-6 text-gray-500" />
                            <span className="ml-3">Help</span>
                        </a>
                    </li>
                </ul>
            </div>
            <Bottom></Bottom>
        </aside>
    )
}

export default Sidebar;