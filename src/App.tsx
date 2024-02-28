import './App.css'
import config from "../config.json"

function App() {

    return (
        <>
            <div className="grid gap-8 items-start justify-center">
                {
                    config.services.map((x, i) => {
                        console.log(x, x["color-start"])
                        return (
                            <div className="relative group" key={i}>
                                <div
                                    className={`absolute -inset-0.5 gradient-start-${x["color-start"]} gradient-to-${x["color-end"]} rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt`}/>
                                <button type="submit" onClick={() => location.href = `${x.link}`}
                                        className="relative px-7 w-full py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                                    <span className="flex items-center space-x-5">
                                        <img alt="" src={x["icon-src"]} className="h-6 w-6"/>
                                        <span className="pr-9 text-gray-100">{x.name}</span>
                                    </span>
                                    <span
                                        className="pl-9 text-indigo-400 group-hover:text-gray-100 transition duration-200">Перейти &rarr;</span>
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default App
