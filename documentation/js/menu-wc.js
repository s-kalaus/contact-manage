'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">contact-demo documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-9312cc841d84809f294bff44431aa22b"' : 'data-target="#xs-components-links-module-AppModule-9312cc841d84809f294bff44431aa22b"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-9312cc841d84809f294bff44431aa22b"' : 'id="xs-components-links-module-AppModule-9312cc841d84809f294bff44431aa22b"' }>
                                        <li class="link">
                                            <a href="components/DemoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DemoComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DemoEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DemoEditComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/ContactListModule.html" data-type="entity-link">ContactListModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ContactListModule-11ca33d5a121d975d5e8d0ad7be80801"' : 'data-target="#xs-components-links-module-ContactListModule-11ca33d5a121d975d5e8d0ad7be80801"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ContactListModule-11ca33d5a121d975d5e8d0ad7be80801"' : 'id="xs-components-links-module-ContactListModule-11ca33d5a121d975d5e8d0ad7be80801"' }>
                                        <li class="link">
                                            <a href="components/ContactListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactListComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-ContactListModule-11ca33d5a121d975d5e8d0ad7be80801"' : 'data-target="#xs-injectables-links-module-ContactListModule-11ca33d5a121d975d5e8d0ad7be80801"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-ContactListModule-11ca33d5a121d975d5e8d0ad7be80801"' : 'id="xs-injectables-links-module-ContactListModule-11ca33d5a121d975d5e8d0ad7be80801"' }>
                                        <li class="link">
                                            <a href="injectables/DatabaseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>DatabaseService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ContactManageModule.html" data-type="entity-link">ContactManageModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ContactManageModule-1ab13c7f0eb4611472899057481e77a4"' : 'data-target="#xs-components-links-module-ContactManageModule-1ab13c7f0eb4611472899057481e77a4"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ContactManageModule-1ab13c7f0eb4611472899057481e77a4"' : 'id="xs-components-links-module-ContactManageModule-1ab13c7f0eb4611472899057481e77a4"' }>
                                        <li class="link">
                                            <a href="components/ContactAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactAddComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ContactEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactEditComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ContactFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactFormComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-ContactManageModule-1ab13c7f0eb4611472899057481e77a4"' : 'data-target="#xs-injectables-links-module-ContactManageModule-1ab13c7f0eb4611472899057481e77a4"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-ContactManageModule-1ab13c7f0eb4611472899057481e77a4"' : 'id="xs-injectables-links-module-ContactManageModule-1ab13c7f0eb4611472899057481e77a4"' }>
                                        <li class="link">
                                            <a href="injectables/DatabaseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>DatabaseService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${ isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                    <li class="link">
                        <a href="interfaces/Contact.html" data-type="entity-link">Contact</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ContactFilter.html" data-type="entity-link">ContactFilter</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
            <li class="chapter">
                <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
            </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
