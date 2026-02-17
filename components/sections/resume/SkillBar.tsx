
type Props = {
    name: string;
    value: number;
}

export default function SkillBar({ name, value }: Props) {
    return (
        <div>
            <div className="flex justify-between mb-1 text-sm">
                <span>{name}</span>
                <span>{value}%</span>
            </div>

            <div className="w-full h-2 bg-gray-800 rounded">
                <div 
                className="h-2 bg-green-500 rounded"
                />
            </div>
        </div>
    )
}