/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   lib/mixins/properties-mixin.html
 */

/// <reference path="../utils/boot.d.ts" />
/// <reference path="../utils/mixin.d.ts" />
/// <reference path="properties-changed.d.ts" />

declare namespace Polymer {


  /**
   * Mixin that provides a minimal starting point to using the PropertiesChanged
   * mixin by providing a mechanism to declare properties in a static
   * getter (e.g. static get properties() { return { foo: String } }). Changes
   * are reported via the `_propertiesChanged` method.
   *
   * This mixin provides no specific support for rendering. Users are expected
   * to create a ShadowRoot and put content into it and update it in whatever
   * way makes sense. This can be done in reaction to properties changing by
   * implementing `_propertiesChanged`.
   */
  function PropertiesMixin<T extends new (...args: any[]) => {}>(base: T): T & PropertiesMixinConstructor & Polymer.PropertiesChangedConstructor;

  interface PropertiesMixinConstructor {
    new(...args: any[]): PropertiesMixin;

    /**
     * Overrides `PropertiesChanged` method to return type specified in the
     * static `properties` object for the given property.
     *
     * @param name Name of property
     * @returns Type to which to deserialize attribute
     */
    typeForProperty(name: string): any;

    /**
     * Finalizes an element definition, including ensuring any super classes
     * are also finalized. This includes ensuring property
     * accessors exist on the element prototype. This method calls
     * `_finalizeClass` to finalize each constructor in the prototype chain.
     */
    finalize(): void;

    /**
     * Finalize an element class. This includes ensuring property
     * accessors exist on the element prototype. This method is called by
     * `finalize` and finalizes the class constructor.
     */
    _finalizeClass(): void;
  }

  interface PropertiesMixin {

    /**
     * Overrides `PropertiesChanged` method and adds a call to
     * `finalize` which lazily configures the element's property accessors.
     */
    _initializeProperties(): void;

    /**
     * Called when the element is added to a document.
     * Calls `_enableProperties` to turn on property system from
     * `PropertiesChanged`.
     */
    connectedCallback(): void;

    /**
     * Called when the element is removed from a document
     */
    disconnectedCallback(): void;
  }
}

declare class base extends superClass {
}
