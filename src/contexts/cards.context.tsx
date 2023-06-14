import { ReactNode, createContext } from "react";
interface CardContextProvider {
  cardHover: {
    enter: (
      el: React.MouseEvent<HTMLDivElement, MouseEvent>,
      title: string
    ) => void;
    leave: (el: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  };
}

export const CardContext = createContext({} as CardContextProvider);

export function CardProvider({ children }: { children: ReactNode }) {
  const cardHover = {
    enter(el: React.MouseEvent<HTMLDivElement, MouseEvent>, title: string) {
      const img = `url(/src/assets/background/cards/${title}.png) no-repeat`;
      el.currentTarget.style.background = img;
      el.currentTarget.style.backgroundSize = "369px";
      el.currentTarget.style.backgroundPosition = "center";

    },
    leave(el: React.MouseEvent<HTMLDivElement, MouseEvent>) {
      el.currentTarget.style.background = "rgba(0, 0, 0, 0.83)";
    },

  };

  return (
    <CardContext.Provider value={{ cardHover }}>
      {children}
    </CardContext.Provider>
  );
}
