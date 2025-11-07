import React from 'react'

export const DifficultyTag = ({ difficulty }) => {
    const styles = {
        Easy: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
        Medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
        Hard: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
    };

    return (
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[difficulty]}`}>
            {difficulty}
        </span>
    )
}

export const StatusIcon = ({ status }) => {
    if(status === "Solved"){
        return (
            <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
        );
    }

    if(status === "Attempted"){
        return (
            <svg className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" />
            </svg>
        );
    }

    return <div className="h-5 w-5"></div>
}