import { Button as ButtonNativeBase, IButtonProps, Heading, Spinner, useTheme } from 'native-base'
import { FC } from "react";

type Props = IButtonProps & {
  title: string;
  loading?: boolean;
  type?: 'late' | 'current' | 'outdated' | 'search';
}

const Button: FC<Props> = ({ title, loading = false, type, ...rest }) => {
  const { colors } = useTheme();
  return (
    <ButtonNativeBase
      mt={8}
      height={14}
      bg={type === 'late' ? colors.red[700] : type === 'search' ? colors.blue[700] : colors.green[700]}
      fontSize="sm"
      rounded="sm"
      _pressed={{
        bg: "green.500",
      }}
      {...rest}
    >
      {
        loading ?
          <Spinner
            color={'secondary.700'}
          /> :
          <Heading
            color="white"
            fontSize="sm"
          >
            {title ? title : 'Entrar'}
          </Heading>
      }

    </ButtonNativeBase>
  )
}

export default Button;
