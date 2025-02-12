import init, {PublicKey} from '@nimiq/core/web'
export default defineLazyEventHandler(async () => {
  const mod = await import('./nimiq.wasm?module' as string)
  return eventHandler(async () => {
    await init(mod)
    const publicKey = '82d80b86d9bf1906832e9f0ba4fa69018792f59190075c396b0e85aeac444e55'
    const key = PublicKey.fromHex(publicKey);
    return key.toHex()
  })
});
