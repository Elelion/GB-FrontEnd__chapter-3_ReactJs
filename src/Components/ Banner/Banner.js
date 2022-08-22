const getConnection = () => true;

export const Banner = () => {
  const isConnected = getConnection();

  if (isConnected) {
    return null
  }

  return (
    <div>Banner</div>
  )
}

export const Warning = () => {
  const isConnected = getConnection();

  if (isConnected) {
    return null
  }

  return (
    <div>Warning</div>
  )
}

export const ButtonWithNetwork = () => {
  const isConnected = getConnection();

  if (isConnected) {
    return null
  }

  return (
    <button />
  )
}

/**/

export const SharedNetworkData = ({render}) => {
  const isConnected = getConnection();

  if (isConnected) {
    return null
  }

  return render(isConnected);
}

/**
 * те мы помещаем нашу логику и теги в пропс render, аналогично как с children
 * от данного паттерна / подхода - все чаще и чаще отказываются
 */
export const Button = () => {
  return <SharedNetworkData render={(isConnected) => {
    if (!isConnected) {
      return <button disabled={true}>Not connected</button>
    }

    return <button>press me</button>
  }} />
}

/**/
