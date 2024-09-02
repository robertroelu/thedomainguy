//Finsweet attributes
import { linkblockedit } from '@finsweet/attributes-linkblockedit/';
import { sort } from '@finsweet/attributes-cmssort';
import { filter } from '@finsweet/attributes-cmsfilter';
import { scrolldisable } from '@finsweet/attributes-scrolldisable';

//Modal
import { modal } from '$modal/modal';

//Nest
import { nestedElement } from './nest/nestElement';

//Utils
import { swipers } from '$utils/swipers';
import { typer } from '$utils/typer';
import { inputText } from '$utils/inputText';
import { escrow } from '$utils/escrow';
import { consoleClear } from '$utils/consoleClear';

window.Webflow ||= [];
window.Webflow.push(() => {
  consoleClear();
  //nestedElement();
  linkblockedit();
  sort();
  filter();
  scrolldisable();
  //modal();
  //swipers();
  typer();
  inputText();
  escrow();
});
