import {
  Injectable,
  Inject,
  ComponentFactoryResolver,
  ViewContainerRef
} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StepRenderingServiceService {
  factoryResolver: ComponentFactoryResolver;

  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver;
  }
  renderComponent(viewContainerRef: ViewContainerRef, componentClass: any) {
    const factory = this.factoryResolver.resolveComponentFactory(
      componentClass
    );
    const component = factory.create(viewContainerRef.parentInjector);
    viewContainerRef.clear();
    viewContainerRef.insert(component.hostView);
  }
}
