import init, { PublicKey } from '@nimiq/core/web'
// Also try to import it from: @nimiq/core/web/main-wasm/index_bg.wasm
// @ts-expect-error this is ok
import mod from './nimiq.wasm'

export default defineEventHandler(async () => {
  await init(mod)
  // await mod()
  console.log('______Running attemp 2')
  const publicKey = '82d80b86d9bf1906832e9f0ba4fa69018792f59190075c396b0e85aeac444e55'
  const key = PublicKey.fromHex(publicKey)
  return key.toHex()
})
