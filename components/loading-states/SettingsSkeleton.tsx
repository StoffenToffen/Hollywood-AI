import Skeleton from "./Skeleton";

const SettingsSkeleton = () => {
  return (
    <>
      <div className="settings__info" aria-hidden="true">
        <div className="settings__info__title">
          <Skeleton width={120} height={20} borderRadius={4} />
        </div>

        <div className="settings__info__text">
          <Skeleton width={80} height={16} borderRadius={4} />
        </div>

        <div className="settings__info__text">
          <Skeleton width={100} height={16} borderRadius={4} />
        </div>

        <div className="settings__info__text">
          <Skeleton width={60} height={16} borderRadius={4} />
        </div>
      </div>

      <div className="settings__info" aria-hidden="true">
        <div className="settings__info__title">
          <Skeleton width={80} height={20} borderRadius={4} />
        </div>

        <span className="settings__info__text">
          <Skeleton width={120} height={16} borderRadius={4} />
        </span>
      </div>
    </>
  );
};

export default SettingsSkeleton;
