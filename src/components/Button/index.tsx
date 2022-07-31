import { Button as ButtonNativeBase, IButtonProps, Heading, Spinner } from 'native-base'
import { FC } from "react";

type Props = IButtonProps & {
  title: string;
  loading: boolean
}

const Button: FC<Props> = ({ title, loading = false, ...rest }) => {
  return (
    <ButtonNativeBase
      mt={8}
      height={14}
      bg="green.700"
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
