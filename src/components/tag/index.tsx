export function Tag({text, caption}) {
    return (
        <div>
            <div className="px-4 py-2 bg-purple-400/95 inline border border-dashed border-white grid place-items-center text-white text-sm font-medium">
                <span className="text-lg font-bold text-white"> {text} </span>
            </div>
            <p className="mt-3">{caption}</p>
        </div>
    )
}