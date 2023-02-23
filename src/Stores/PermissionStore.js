import { makeAutoObservable } from 'mobx'
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
}
