import { app, BrowserWindow, dialog } from 'electron'
import { create_option, did_create } from '@/create'
import { watch } from './watch'
import { autoUpdater } from 'electron-updater'

console.log(process.env.NODE_ENV)

/** 控制台中文乱码 */
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

/** 主窗口 */
let main_window: any

app.once('ready', () => {
    createWindow()

    autoUpdater.checkForUpdates()
    autoUpdater.on('update-available', () => {
        dialog.showMessageBox({
            title: '有更新',
            message: '有更新了, 自动下载',
        })
        autoUpdater.downloadUpdate()
    })
    autoUpdater.on('update-downloaded', () => {
        dialog.showMessageBox({
            title: '下载完了',
            message: '自动安装',
        })
        autoUpdater.quitAndInstall()
        main_window.destroy()
    })
    autoUpdater.on('download-progress', function(progressObj) {
        main_window.webContents.send('download-progress', progressObj)
    })
})

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function() {
    if (main_window === null) createWindow()
})

function createWindow() {
    main_window = new BrowserWindow(create_option())
    did_create(app, main_window)

    watch()

    main_window.on('closed', function() {
        main_window = null
    })
}
