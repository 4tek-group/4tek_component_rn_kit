import { makeAutoObservable } from 'mobx'
import { hydrateStore, isHydrated } from 'mobx-persist-store'
export default class PermissionStore {
  show = false
  title = ''
  content = ''
  appName = ''
  isBottomSheet = false
  onAccept = () => {}
  onDeny = () => {}
  constructor() {
    makeAutoObservable(this)
  }

  showDiaLog({
    title = '',
    content = '',
    appName = '',
    isBottomSheet = false,
    onAccept = () => {},
    onDeny = () => {},
  }) {
    this.show = true
    this.title = title
    this.content = content
    this.appName = appName
    this.isBottomSheet = isBottomSheet
    this.onAccept = onAccept
    this.onDeny = onDeny
  }

  close() {
    this.show = false
  }

  // check for hydration (required)
  get isHydrated() {
    return isHydrated(this)
  }
  // hydrate the store (required)
  async hydrateStore() {
    await hydrateStore(this)
  }
}
