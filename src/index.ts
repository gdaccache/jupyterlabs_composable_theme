import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the @composable/jupyterlabs-composable-theme extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: '@composable/jupyterlabs-composable-theme',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension @composable/jupyterlabs-composable-theme is activated!');
    const style = '@composable/jupyterlabs-composable-theme/index.css';

    manager.register({
      name: '@composable/jupyterlabs-composable-theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
