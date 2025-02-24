export const Bar = ({ animationDuration, progress }) => (
    <div
        className="bg-brand dark:bg-white h-1 w-full fixed left-0 top-0 z-50"
        style={{
            marginLeft: `${(-1 + progress) * 100}%`,
            transition: `margin-left ${animationDuration}ms linear`,
        }} />
);
