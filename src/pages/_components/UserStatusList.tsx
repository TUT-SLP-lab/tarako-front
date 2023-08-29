export const UserStatusList = () => {
  return (
    <div className="flex justify-between gap-4">
      <CardSkelton />
      <CardSkelton />
      <CardSkelton />
    </div>
  );
};

const CardSkelton = () => {
  return (
    <div className="h-[200px] w-[240px] rounded-lg border border-gray-200 bg-gray-100" />
  );
};
