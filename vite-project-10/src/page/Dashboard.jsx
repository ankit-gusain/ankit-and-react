import { useState, useEffect } from 'react';

export default function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const [quote, setQuote] = useState(' QUOTE');
    const quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
        "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. - Steve Jobs",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
        "It does not matter how slowly you go as long as you do not stop. - Confucius",
        "If you love what you are doing, you will be successful. - Albert Schweitzer",
        "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
        "Success is the sum of small efforts, repeated day in and day out. - Robert Collier",
        "The only way to achieve the impossible is to believe it is possible.- Charles Kingsleigh",
        "Hard work beats talent when talent doesn't work hard. - Tim Notke",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "The expert in anything was once a beginner. - Helen Hayes",
        "Don't stop when you're tired, stop when you're done.- Unknown",
        "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            setQuote(quotes[randomIndex]);
        }, 5000); // Change quote every 5 seconds
        return () => clearInterval(intervalId);
    }, []);

    const handleAddTask = () => {
        const taskName = prompt('Enter task name:');
        if (taskName) {
            setTasks([...tasks, taskName]);
        }
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <h1 className="text-3xl font-bold mb-4">Welcome to My Dashboard</h1>
            <p className="text-lg mb-4">Want Motivation read these </p>
            <p className='text-center'>{quote}</p>
            <br />
            <button
                className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded mb-4"
                onClick={handleAddTask}
            >
                Add Task
            </button>
            <ul className="list-disc pl-6">
                {tasks.map((task, index) => (
                    <li key={index} className="text-lg mb-2">
                        {task}
                        <button
                            className="ml-4 text-red-500"
                            onClick={() => handleDeleteTask(index)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
