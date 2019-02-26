export * from './attachment.service';
import { AttachmentService } from './attachment.service';
export * from './businessCase.service';
import { BusinessCaseService } from './businessCase.service';
export * from './businessObject.service';
import { BusinessObjectService } from './businessObject.service';
export * from './componentController.service';
import { ComponentControllerService } from './componentController.service';
export * from './directiveController.service';
import { DirectiveControllerService } from './directiveController.service';
export * from './processController.service';
import { ProcessControllerService } from './processController.service';
export * from './templateController.service';
import { TemplateControllerService } from './templateController.service';
export * from './testController.service';
import { TestControllerService } from './testController.service';
export * from './validationRuleController.service';
import { ValidationRuleControllerService } from './validationRuleController.service';
export * from './workingPortalAdviceController.service';
import { WorkingPortalAdviceControllerService } from './workingPortalAdviceController.service';
export * from './workingPortalController.service';
import { WorkingPortalControllerService } from './workingPortalController.service';
export * from './xchangeController.service';
import { XchangeControllerService } from './xchangeController.service';
export const APIS = [AttachmentService, BusinessCaseService, BusinessObjectService, ComponentControllerService, DirectiveControllerService, ProcessControllerService, TemplateControllerService, TestControllerService, ValidationRuleControllerService, WorkingPortalAdviceControllerService, WorkingPortalControllerService, XchangeControllerService];