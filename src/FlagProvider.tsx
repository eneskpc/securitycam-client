import { TR, US } from "country-flag-icons/react/3x2";
import { Language } from "./LocaleResources";

type Props = {
  code: Language;
};

const FlagProvider = (props: Props) => {
  switch (props.code) {
    case Language.TR:
      return <TR width={40} />;
    case Language.EN:
      return <US width={40} />;
    default:
      return null;
      break;
  }
};

export default FlagProvider;
