interface NavigationProps {
    onPrev: () => void;
    onNext: () => void;
  }
  
  const Navigation: React.FC<NavigationProps> = ({ onPrev, onNext }) => {
    return (
      <div className="navigation">
        <button  onClick={onPrev}>
          <img src="/main__left.svg" alt="" />
        </button>
        <button  onClick={onNext}>
          <img src="/main__right.svg" alt="" />
        </button>
      </div>
    );
  };
  
  export default Navigation;