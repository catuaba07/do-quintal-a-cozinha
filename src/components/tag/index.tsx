export function Tag({text, caption}) {
    return (
        <div>
            <div className="px-4 py-2 bg-purple-400/95 inline">
                <span className="text-lg font-bold text-white"> {text} </span>
            </div>
            <p className="mt-3">{caption}</p>
        </div>
    )
}


