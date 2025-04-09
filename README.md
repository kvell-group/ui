# commits:

## fix: description

change version from x.y.z => x.y.z + 1

## feat: description

change version from x.y.z => x.y + 1.z

# usage

```tsx
import { MantineProvider } from '@kvell-group/ui'

const App = () => {
  return <MantineProvider>{/* app */}</MantineProvider>
}
```

```tsx
import { TestButton } from '@kvell-group/ui'
```

# add to next project [page router]

```tsx
//app.tsx
import { MantineProvider } from '@kvell-group/ui'

const App = () => {
  //...
  return <MantineProvider>{getLayout(<Component {...pageProps} />, pageProps)}</MantineProvider>
}
```

```tsx
//_document.tsx
import { ColorSchemeScript, mantineHtmlProps } from '@kvell-group/ui'
import '@mantine/core/styles.layer.css'

class MyDocument extends Document {
  //...
  render() {
    return (
      <Html {...mantineHtmlProps}>
        <Head>
          {/*... */}
          <ColorSchemeScript defaultColorScheme='auto' />
          {/*... */}
        </Head>
      </Html>
    )
  }
}
```
